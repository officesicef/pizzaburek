package com.example.scan_it;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.StrictMode;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.example.scan_it.model.User;
import com.google.gson.Gson;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.Objects;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class InputActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_input);

        Intent intent = new Intent(InputActivity.this, MainActivity.class);
        SharedPreferences mPrefs = getSharedPreferences("pref",MODE_PRIVATE);

        Button registerButton = findViewById(R.id.register);
        registerButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                EditText nameval = findViewById(R.id.firstName);
                String name = nameval.getText().toString().trim();
                EditText lastnameval = findViewById(R.id.lastName);
                String lastname = lastnameval.getText().toString().trim();
                EditText passwordval = findViewById(R.id.password);
                String password = passwordval.getText().toString().trim();
                EditText phoneval = findViewById(R.id.phone);
                String phone = phoneval.getText().toString().trim();

                User user = new User(name, lastname, password, phone);

                String postUrl = "http://10.10.128.114:5555/api/auth/create-or-validate-user";
                StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
                StrictMode.setThreadPolicy(policy);

                final MediaType JSON = MediaType.get("application/json; charset=utf-8");

                Gson gson = new Gson();
                String json = gson.toJson(user);

                OkHttpClient client = new OkHttpClient();
                RequestBody body = RequestBody.create(json, JSON);
                Request request = new Request.Builder()
                        .url(postUrl)
                        .post(body)
                        .build();

                try (Response response = client.newCall(request).execute()) {
                    Toast.makeText(InputActivity.this, "Success!", Toast.LENGTH_SHORT).show();

                    SharedPreferences.Editor prefsEditor = mPrefs.edit();

                    String jsonString = Objects.requireNonNull(response.body()).string();
                    JSONObject responseUser = new JSONObject(jsonString);

                    prefsEditor.putInt("id", Integer.parseInt(gson.toJson(responseUser.get("id"))));
                    prefsEditor.putString("name", gson.toJson(responseUser.get("firstName")));
                    prefsEditor.putString("lastname", gson.toJson(responseUser.get("lastName")));
                    prefsEditor.putString("phone", gson.toJson(responseUser.get("phoneNumber")));

                    prefsEditor.commit();

                    startActivity(intent);
                    finish();
                } catch (IOException | JSONException e) {
                    Toast.makeText(InputActivity.this, e.toString(), Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}
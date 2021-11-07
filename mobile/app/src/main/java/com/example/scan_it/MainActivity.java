package com.example.scan_it;


import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.StrictMode;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.example.scan_it.model.Connection;
import com.example.scan_it.model.User;
import com.google.gson.Gson;

import java.io.IOException;
import java.util.Objects;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;


public class MainActivity extends AppCompatActivity {
    private final static int request_Code = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button QRScanButton = findViewById(R.id.button);
        QRScanButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this, QRScanActivity.class);
                startActivityForResult(intent, request_Code);
            }
        });

        Button reportCovid = findViewById(R.id.buttonReport);
        reportCovid.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String postUrl = "http://10.10.128.114:5555/api/user-institutions";
                StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
                StrictMode.setThreadPolicy(policy);

                final MediaType JSON
                        = MediaType.get("application/json; charset=utf-8");

                SharedPreferences mPrefs = getSharedPreferences("pref",MODE_PRIVATE);
                int savedId = mPrefs.getInt("id", 0);

                Gson gson = new Gson();
                String json = gson.toJson(savedId);

                OkHttpClient client = new OkHttpClient();
                RequestBody body = RequestBody.create(json, JSON);
                Request request = new Request.Builder()
                        .url(postUrl)
                        .post(body)
                        .build();
                try (Response response = client.newCall(request).execute()) {
                    Toast.makeText(MainActivity.this, "Success", Toast.LENGTH_LONG).show();
                } catch (IOException e) {
                    Toast.makeText(MainActivity.this, e.toString(), Toast.LENGTH_SHORT).show();
                }
            }
        });

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == request_Code) {
            if (resultCode == RESULT_OK) {

                String postUrl = "http://10.10.128.114:5555/api/user-institutions";
                StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
                StrictMode.setThreadPolicy(policy);

                final MediaType JSON
                        = MediaType.get("application/json; charset=utf-8");

                SharedPreferences mPrefs = getSharedPreferences("pref",MODE_PRIVATE);
                int savedId = mPrefs.getInt("id", 0);

                Gson gson = new Gson();
                Connection connection = new Connection(savedId, Integer.parseInt(data.getData().toString()));
                String json = gson.toJson(connection);

                OkHttpClient client = new OkHttpClient();
                RequestBody body = RequestBody.create(json, JSON);
                Request request = new Request.Builder()
                        .url(postUrl)
                        .post(body)
                        .build();
                try (Response response = client.newCall(request).execute()) {
                    Toast.makeText(MainActivity.this, "Success", Toast.LENGTH_LONG).show();
                } catch (IOException e) {
                    Toast.makeText(MainActivity.this, e.toString(), Toast.LENGTH_SHORT).show();
                }
            }
        }
    }
}

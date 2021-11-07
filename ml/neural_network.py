import numpy
import tensorflow as tf
from tensorflow import keras
import pandas as pd
import matplotlib.pyplot as plt
import os

def save_fig(file_name):
    path = os.path.join(os.getcwd(), file_name + ".png")
    plt.tight_layout()
    plt.title(file_name)
    plt.savefig(path, format="png", dpi=300)

def new_net(shape):
    model = tf.keras.Sequential()
    # model.add(tf.keras.layers.InputLayer(
    # input_shape=(shape)
    # ))
    model.add(tf.keras.layers.Dense(100, activation="relu"))
    model.add(tf.keras.layers.Dense(50, activation="relu"))
    model.add(tf.keras.layers.Dense(25, activation="relu"))
    model.add(tf.keras.layers.Dense(1, activation="linear"))
    return model


def calculate(data, labels):
    train_data, train_label, valid_data, valid_label = data[:-200], labels[:-200], data[-200:], labels[-200:]
    model = new_net(len(data[0]))

    model.compile(loss="msle",
                  optimizer="adam",
                  metrics=["mae"])

    history = model.fit(train_data, train_label, epochs=50, batch_size=32, workers=1,
                        validation_data=(valid_data, valid_label), shuffle=True)

    df = pd.DataFrame(history.history)
    df.plot(figsize=(8, 5))
    plt.grid(True)
    plt.gca().set_ylim(0, 1)
    save_fig("rez")

    filepath = os.path.join(os.getcwd(), "rez" + ".h5")
    model.save(filepath)


def load():
    model_path = os.path.join(os.getcwd(), "rez" + ".h5")
    return keras.models.load_model(model_path)


def predict(data):
    return load().predict(numpy.array(data).reshape(-1, 4))

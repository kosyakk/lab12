from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def main_page():
    return render_template('/index.html')

@app.route("/Calc/Manual")
def Manual():
    return render_template('Calc/Manual.html')

@app.route("/Calc/ManualWithSeparateHandlers")
def ManualWithParameters():
    return render_template("Calc/ManualWithSeparateHandlers.html")

@app.route("/Calc/ModelBindingInParameters")
def ModelInParameters():
    return render_template("Calc/ModelBindingInParameters.html")

@app.route("/Calc/ModelBindingInSeparateModel")
def ModelInSeparateModel():
    return render_template("Calc/ModelBindingInSeparateModel.html")

if __name__ == "__main__":
    app.run( debug=True, port=80)
    

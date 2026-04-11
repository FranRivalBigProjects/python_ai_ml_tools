function analyze(){
let input=document.getElementById('input').value||"";
let insights="";
let output="";

// performance
if(input.includes("accuracy") || input.includes("loss")){
  insights += "Model performance metrics detected.<br>";
}

// balancing
if(input.includes("class")){
  insights += "Dataset class imbalance possible.<br>";
}

// feature importance
if(input.includes("feature")){
  output += "Feature importance visualization ready.<br>";
}

// logs
if(input.includes("epoch")){
  insights += "Training log detected.<br>";
}

// hyperparameters
if(input.includes("lr") || input.includes("batch")){
  insights += "Hyperparameters detected.<br>";
}

if(!insights) insights="No major ML patterns detected.";

document.getElementById('result').innerHTML =
"<b>Output:</b>"+output+"<br>"+insights;
}

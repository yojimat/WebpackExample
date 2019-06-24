export class ComponentService {
	constructor() {
		this.numberOneInput = document.getElementById("numberOne");
		this.numberTwoInput = document.getElementById("numberTwo");
		this.addValuesButton = document.getElementById("addValues");
		this.resultDiv = document.getElementById("result");
	}

	getInputs() {
		return [this.numberOneInput.value,this.numberTwoInput.value];
	}

	setResult(string) {
		this.resultDiv.innerText = string;
	}

	onClick(callback) {
		this.addValuesButton.addEventListener("click", callback);
	}
}
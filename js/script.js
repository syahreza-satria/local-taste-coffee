const scriptURL =
	"https://script.google.com/macros/s/AKfycbxnlBwLYt5yZPh3-KKMPGUTb9m31Fu2vw1vRORnydcxvHgOa_19FA-Coon6E54eavMy/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	btnLoading.classList.toggle("d-none");
	btnKirim.classList.toggle("d-none");
	fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then((response) => {
			btnLoading.classList.toggle("d-none");
			btnKirim.classList.toggle("d-none");
			myAlert.classList.toggle("d-none");
			form.reset();
			console.log("Success!", response);
		})
		.catch((error) => console.error("Error!", error.message));
});

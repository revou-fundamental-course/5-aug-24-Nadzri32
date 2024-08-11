// Ini Javascript
const beratbadanInput = document.getElementById("beratbadan")
const usiaInput = document.getElementById("usia")
const tinggibadanInput = document.getElementById("tinggibadan")
const hasilSpan = document.getElementById("hasil")

function calculateTotal(){
    const beratbadan = beratbadanInput.value;
    const usia = parseInt(usiaInput.value.replace(",", ""));
    const tinggibadan = parseInt(tinggibadanInput.value.replace(",", ""));
    const hasil = beratbadan/tinggibadan**;

    hasilSpan.innerHTML = `${hasil.toLocaleString("id")}`;
}

beratbadanInput.addEventListener("input", calculateTotal);
tinggibadanInput.addEventListener("input", calculateTotal);
usiaInput.addEventListener("input", calculateTotal);

calculateTotal();
const inputs = document.querySelectorAll(".controls");

function handleupdates(){
    const suffix = this.dataset.sizing || '';
    document.documentElementstyle.setProperty(`--$(this.name)`, this.value + suffix);
}
inputs.forEach(inputs =>inputs.addEventListener('change', handleupdates));

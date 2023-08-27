function isValidURL(url) {
    let pattern = /^(https?:\/\/)[\w-]+(\.[\w-]+)+$/;
    if (pattern.test(url)) {
        console.log('The input is a valid URL.');
    } else {
        console.log('The input is not a valid URL.');
    }
}


isValidURL("https://pwskills.com")
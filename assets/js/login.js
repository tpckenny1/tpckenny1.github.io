
function setWithExpiry(key, value, ttl) {
    const now = new Date()

    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    }
    localStorage.setItem(key, JSON.stringify(item))
}

function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)

    // if the item doesn't exist, return null
    if (!itemStr) {
        return null
    }

    const item = JSON.parse(itemStr)
    const now = new Date()

    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
        // If the item is expired, delete the item from storage
        // and return null
        localStorage.removeItem(key)
        return null
    }
    return item.value
}

function getAccessKey() {
    const itemStr = localStorage.getItem("credential")
    // if the item doesn't exist, return null
    if ((itemStr === null) || (typeof itemStr === "undefined") || (itemStr === "")) {
        return ""
    }
    const item = JSON.parse(itemStr)
    const itemValue = item.value
    if ((itemValue === null) || (typeof itemValue === "undefined") || (itemValue === "")) {
        return ""
    }
    if ((itemValue.accesskey === null) || (typeof itemValue.accesskey === "undefined") || (itemValue.accesskey === "")) {
        return ""
    }
    return itemValue.accesskey
}

function getSchool() {
    const itemStr = localStorage.getItem("credential")
    // if the item doesn't exist, return null
    if ((itemStr === null) || (typeof itemStr === "undefined") || (itemStr === "")) {
        return ""
    }
    const item = JSON.parse(itemStr)
    const itemValue = item.value
    if ((itemValue === null) || (typeof itemValue === "undefined") || (itemValue === "")) {
        return ""
    }
    if ((itemValue.school === null) || (typeof itemValue.school === "undefined") || (itemValue.school === "")) {
        return ""
    }
    return itemValue.school
}

function getSport() {
    const itemStr = localStorage.getItem("credential")
    // if the item doesn't exist, return null
    if ((itemStr === null) || (typeof itemStr === "undefined") || (itemStr === "")) {
        return ""
    }
    const item = JSON.parse(itemStr)
    const itemValue = item.value
    if ((itemValue === null) || (typeof itemValue === "undefined") || (itemValue === "")) {
        return ""
    }
    if ((itemValue.sport === null) || (typeof itemValue.sport === "undefined") || (itemValue.sport === "")) {
        return ""
    }
    return itemValue.sport
}

function getSchoolFullname() {
    const itemStr = localStorage.getItem("credential")
    // if the item doesn't exist, return null
    if ((itemStr === null) || (typeof itemStr === "undefined") || (itemStr === "")) {
        return ""
    }
    const item = JSON.parse(itemStr)
    const itemValue = item.value
    if ((itemValue === null) || (typeof itemValue === "undefined") || (itemValue === "")) {
        return ""
    }
    if ((itemValue.schoolFullname === null) || (typeof itemValue.schoolFullname === "undefined") || (itemValue.schoolFullname === "")) {
        return ""
    }
    return itemValue.schoolFullname
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

async function postData(url="", data={}) {
    // Check expired accesskey 
    const value = getWithExpiry("credential")
    console.log(value)
    if ((value === null) || (typeof value === "undefined") || (value === "")) { 
        window.location = "https://tpckenny1.github.io/docs/login/?retUrl=" + location.pathname;
    } 
    // Fetch Data through API 
    const response = await fetch(url, {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
        },
    });
    return response.json();
}

// function fetchDataByAPI(url="", data={}) {
//     return postData(url, data)
// }
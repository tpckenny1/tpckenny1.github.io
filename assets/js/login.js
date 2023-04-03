// const btnLogin = document.getElementById("btn-login")
// const inputSchool = document.getElementById("input-school")
// const inputAccesskey = document.getElementById("input-accesskey")

// btnSet.addEventListener("click", () => {
//     setWithExpiry("accesskey", 
//         {
//             "school": inputSchool.value,
//             "accesskey": inputAccesskey.value
//         }, 
//         5000)
// })

// btnGet.addEventListener("click", () => {
//     const value = getWithExpiry("accesskey")
//     console.log(value)
// })

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
//Easy way access information user saves in Settings components. 
//setters
const setUserFirstName = (firstName) => {
    const key = 'userFirstName';
    return localStorage.setItem(key, firstName);
}

const setUserLasttName = (lastName) => {
    const key = 'userLastName';
    return localStorage.setItem(key, lastName);
}

const setUserAddressOne = (addressOne) => {
    const key = 'addressOne';
    return localStorage.setItem(key, addressOne);
}

const setUserAddressTwo = (addressTwo) => {
    const key = 'addressTwo';
    return localStorage.setItem(key, addressTwo);
}

const setUserPhoneNumber = (phoneNumber) => {
    const key  = 'userPhoneNumber';
    return localStorage.setItem(key, phoneNumber);
}

//getters
const getUserFirstName = () => {
    const key = 'userFirstName';
    return localStorage.getItem(key);
}

const getUserLastName = () => {
    const key = 'userLastName';
    return localStorage.getItem(key);
}

const getUserAddressOne = () => {
    const key = 'addressOne';
    return localStorage.getItem(key);
}

const getUserAddressTwo = () => {
    const key = 'addressTwo';
    return localStorage.getItem(key);
}

const getUserPhoneNumber = () => {
    const key  = 'userPhoneNumber';
    return localStorage.getItem(key);
}

export {getUserFirstName, getUserLastName, getUserAddressOne, getUserAddressTwo, getUserPhoneNumber, setUserFirstName, setUserLasttName, setUserAddressOne, setUserAddressTwo, setUserPhoneNumber}
//DERS BASLADI KNKA CIKIYORUM :D tamam kanka kolay gelsin :)
export const checkIfTalkExists = (saleId, receiverId, token) => {
    const url = apiConfig.serverUrl + '/messages?saleId=' + saleId + '&receiverId=' + receiverId;
    return axios.get(url, {
        headers:{
            authorization: token
        }
    }).then(response => {
        return response.data && response.data.messages;
    }).catch(error => false);
}
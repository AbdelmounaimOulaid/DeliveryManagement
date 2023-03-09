import Api from './Api'
import Csrf from './Csrf'

class Sale {

    async all() {
        await Csrf.getCookie();
        return Api.get('api/sales');
    }
}



export default new Sale();
export default {
    namespaced: true,
    state() {
        return {
            clients: []
        }
    },
    getters: {
        getClients(state) {
            return state.clients
        }
        
    },
    mutations: {
       SAVE_CLIENTS(state, data) {
            return state.clients.push(...JSON.parse(data))
       },
       EDIT_CARD(state, data) {
           let client = state.clients.find((item) => item.id === data.id)
           for (let key in client){
               if(client[key] === data.old) {
                   client[key] = data.new
               }
           }
       },
       DELETE_ClIENT(state, data) {
           let ind = state.clients.findIndex((item) => item.id === data)
           state.clients.splice(ind,1)
       },
       ADD_CARD(state,data) {
           let client = data;
           state.clients.push(client)    
        }
     },

    actions: {
        loadClients({ commit }) {
            let req = new XMLHttpRequest();
            req.onreadystatechange = () => {
           console.log();
                if (req.readyState == XMLHttpRequest.DONE) {
                    commit('SAVE_CLIENTS', req.responseText)
                }
            };
            req.open(
                'GET',
                'https://api.jsonbin.io/b/623b05467caf5d67837019dd/2',
                true
            );
            req.setRequestHeader(
                'secret-key',
                '$2b$10$aJalgazfDF4FthANLAoJqeQpTGJOkYQdtOnyMC4iymwAgdBrrY8OC'
            );
            req.send();
        }
    }
}
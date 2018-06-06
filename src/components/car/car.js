const state={
    data:''
}
const mutations={
    aaa(state, n){
        state.data = n
    }
}
const actions={
    getcar(content,carlist){
        content.commit("aaa", carlist)
    }
}
export default {
    state,
    mutations,
    actions
}
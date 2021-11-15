

export const state = () => ({
    gender: 'Male',
    codes: '',
    syndrome: '',
    opt1: true,
})
export const mutations = {
    gender(state, gender) {
        state.gender = gender
    },
    codes(state, codes) {
        state.codes = codes
    },
    syndrome(state, syndrome) {
        state.syndrome = syndrome
    },
    syndromReset(state) {
        state.syndrome = ''
    },
    opt1(state, opt1) {
        state.opt1 = opt1
    }

}


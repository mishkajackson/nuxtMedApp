

export const state = () => ({
        gender: 'Male',
        codes: '',
        syndrome: 'syndromOne',
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
    
    }


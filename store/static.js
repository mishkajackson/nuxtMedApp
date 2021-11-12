

export const state = () => ({
        gender: 'Male',
        codes: '',
        syndrome: '',
        syndrom1: 'Легкий синдром',
        syndrom2: 'Умеренный синдром',
        syndrom3: 'Тяжелый синдром',
        syndrom4: 'Недиф синдром',
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
    
    }


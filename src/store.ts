import { createStore } from 'vuex'
import VuexORM from '@vuex-orm/core'
import * as models from '@/models'

const database = new VuexORM.Database()
for (let model of Object.values(models)) database.register(model)

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [VuexORM.install(database)],
})

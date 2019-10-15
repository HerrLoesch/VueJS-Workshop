import { mount, createLocalVue } from "@vue/test-utils"
import Vuetify from "vuetify"

import drawing from "@/components/drawing"


const localVue = createLocalVue()
const vuetify = new Vuetify()

describe("Drawing component", () => {
    it("shows a drawing if at least a date is given", () => {

        var value = {
            date: "2000-01-01"
        }

        const wrapper = mount(drawing, {
            localVue,
            vuetify,
            propsData: {
                value
            }
        })

        expect(wrapper.html()).toContain(value.date)
    })
})


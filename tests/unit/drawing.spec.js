import { mount } from "@vue/test-utils"
import drawing from "@/components/drawing"

describe("Drawing component", () => {

    it("shows a drawing if at least a date is given", () => {
        
        var value = {
            date: "2000-01-01"
        }

        const wrapper = mount(drawing, {
            propsData: {
                value
            }
        })

        expect(wrapper.html()).toContain(value.date)
    })
})
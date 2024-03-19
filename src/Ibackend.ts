import IProductsObgect from "./module"
import IfiveSteps from "./fiveSteps"
import IkitchenArguments from "./AvertisingCard"
import Imenu from "./menu"

export default interface Ibackend{
    
        menu: string[],
        products: IProductsObgect[] ,
        kitchenArguments: IkitchenArguments[],
        fiveSteps: IfiveSteps[],
        
    
}
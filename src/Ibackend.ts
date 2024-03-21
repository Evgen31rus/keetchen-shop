import IProductsObgect from "./module"
import IfiveSteps from "./fiveSteps"
import IkitchenArguments from "./AvertisingCard"
import Imenu from "./menu"
import IHelpSearch from "./HelpSearch"
import IAdditionalSolution from "./IAdditionalSolutions"

export default interface Ibackend{
    
        menu: string[],
        HelpSearch: IHelpSearch[]
        products: IProductsObgect[] ,
        additionalSolution:IAdditionalSolution[]
        kitchenArguments: IkitchenArguments[],
        fiveSteps: IfiveSteps[],
        
    
}
import IProductsObgect from "./module"
import IfiveSteps from "./fiveSteps"
import IkitchenArguments from "./AvertisingCard"
import Imenu from "./menu"
import IHelpSearch from "./HelpSearch"
import IAdditionalSolution from "./IAdditionalSolutions"
import IReviews from "./IReviews"
import IDisainers from "./IDisainers"

export default interface Ibackend{
    
        menu: string[],
        HelpSearch: IHelpSearch[]
        products: IProductsObgect[] ,
        additionalSolution:IAdditionalSolution[]
        kitchenArguments: IkitchenArguments[],
        disainers:IDisainers[],
        fiveSteps: IfiveSteps[],
        reviews: IReviews[]
        
    
}
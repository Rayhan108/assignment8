import { getAppliedCart } from "../../Utilities/fakedb";


const loadData = async () =>{
 const loadedJobs = await fetch('featurejobdata.json')
const jobs = await loadedJobs.json();
// console.log(jobs);
const storedCart =getAppliedCart()
const savedCart =[];
for (const id in storedCart){
    // console.log(id);
    const addedJobs =jobs.find(job=>job.id == id)
    if(addedJobs){
        const quantity =storedCart[id]
        addedJobs.quantity=quantity;
        // console.log(addedJobs)
        savedCart.push(addedJobs)
    }
}

// console.log(savedCart)
return savedCart
}

export default loadData
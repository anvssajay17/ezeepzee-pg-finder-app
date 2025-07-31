import AddPgForm from "../components/AddPgForm"
import ListNav from "../components/ListNav"
const AddPgPage = () => {
  return (
    <div>
     <ListNav/>
     
     <div style={{ marginTop: "150px" }}>
        <AddPgForm />
      </div>
     
    </div>
  )
}

export default AddPgPage
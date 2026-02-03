import "./App.css"
import Alert from "./components/Alert/Alert"
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
import ExpenseList from "./components/ExpenseList/ExpenseList"
import { ExpenseProvider } from './ExpenseContext' 
import ExpensePrice from "./components/ExpensePrice/ExpensePrice"

const App = () => {

    return (
        <ExpenseProvider>
        <main className="main-container">   
            <h1>가계부 </h1>
            <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem'}}>
                <ExpenseForm  />
            </div >
            <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem'}}>
                <ExpenseList />
            </div>
            <div style={{ 
                display: 'flex',
                justifyContent: 'end',
                marginTop: '1rem'
            }}>
                <p style={{ fontSize: '2rem' }}>
                </p>
            </div>
            <div>
                <ExpensePrice />             
            </div>
        </main>
        </ExpenseProvider>
    )
}

export default App

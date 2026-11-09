import './App.css'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'

const team = [
  { id: 1, name: "Anna", role: "Hönnuður", age: 29, isLeader: false },
  { id: 2, name: "Jón", role: "Forritari", isLeader: false },
  { id: 3, name: "Kinga", role: "Forritari", isLeader: true },
  { id: 4, name: "Hjalti", age: 33, isLeader: false },
]

function App() {

  return (
    <>
    <Header />
    <section className="team">
      {team.map((person) => (
        <ProfileCard
          key={person.id}
          name={person.name}
          role={person?.role}
          age={person?.age}
          isLeader={person.isLeader}
        />
      ))}
    </section>
    </>
  )
}

export default App
import './App.css';
import { useStore } from './zustand/zustandStore';
import { Counter } from './features/counter/Counter';

//Самая большая разница в кол-во кода,
// zustand очень прост в то время для rtk нужно писать больше кода
// Но для более крупных проектов Redux обеспечивает лучшую масштабируемость и предсказуемость
// Для небольших проектов простота Zustand может быть предпочтительнее.

function App() {
    //В Zustand достаточно вызвать хук с нужными состояниями и функциями
    const { bears, increasePopulation, decreasePopulation } = useStore();

    return (
        <div style={{ display: 'flex', gap: '4rem' }}>
            <div>
                <h2>Zustand counter</h2>
                <h3>{bears} bears around here...</h3>
                <button onClick={increasePopulation}>one up</button>
                <button onClick={decreasePopulation}>one down</button>
            </div>
            <div>
                <h2>Rtk counter</h2>
                <Counter />
            </div>
        </div>
    );
}

export default App;

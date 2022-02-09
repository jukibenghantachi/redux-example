import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addValue, deleteValue, getData } from './features/User';

function App() {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.users.value);

    useEffect(() => {
        dispatch(getData());
    }, []);

    if (list) {
        return (
            <div>
                {list.map((x, key) => {
                    return (
                        <div key={key}>
                            <p>{x.title}</p>
                            <button onClick={() => dispatch(deleteValue({ id: x.id }))}>
                                Delete
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    }

    // return (
    //     <div>
    //         {list
    //             ? list.map((x, key) => {
    //                   return (
    //                       <div key={key}>
    //                           <p>{x.name}</p>
    //                           <button onClick={() => dispatch(deleteValue({ id: x.id }))}>
    //                               Delete
    //                           </button>
    //                       </div>
    //                   );
    //               })
    //             : null}
    //         <button
    //             onClick={() => dispatch(addValue({ id: 10, name: 'Hello', username: 'Tester' }))}>
    //             Add
    //         </button>
    //     </div>
    // );
}

export default App;

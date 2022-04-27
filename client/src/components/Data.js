import { useState } from "react"

const columns = [
    "type", "bottles", "cans"
]
const data = {
    store1: [
        { type: "IPA", bottles: 78, cans: 210 },
        { type: "SOUR", bottles: 72, cans: 220 },
        { type: "LAGER", bottles: 107, cans: 100 },
        { type: "STOUT", bottles: 85, cans: 90 },

    ],
    store2: [
        { type: "IPA", bottles: 43, cans: 82 },
        { type: "SOUR", bottles: 92, cans: 50 },
        { type: "LAGER", bottles: 17, cans: 10 },
        { type: "STOUT", bottles: 60, cans: 30 },
    ]
}

function Data({ setComponent }) {
    const [store, setStore] = useState("store1")
    const handleClick = (name) => { setStore(name) }
    const products = data[store]
    return (
        <div class="container">
            <div class="row justify-content-around my-5">
                <div class="col">
                    <button onClick={() => handleClick("store1")} type="button" class="btn btn-warning">Store 1</button>
                </div>
                <div class="col">
                    <button onClick={() => handleClick("store2")} type="button" class="btn btn-success">Store 2</button>
                </div>

            </div>
            <table>
                <tr>
                    <th>Type</th>
                    <th>Bottles</th>
                    <th>Cans</th>
                </tr>
                {products.map((product) => {
                    return (
                        <tr>
                            {columns.map((column) => {
                                return (
                                    <td>
                                        {product[column]}
                                    </td>
                                )

                            })}


                        </tr>
                    )

                })}
                {/* <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr> */}
            </table>
        </div>
    )
}

export default Data;
import { useContext, useMemo } from "react";
import { MyAppContext } from "./MyAppContext";

export default function MyCount4() {
  const { count2, setCount2 } = useContext(MyAppContext);

  // console.log('MyCount4 is updated.');
  // return (
  //   <div className="border">
  //     MyCount4
  //     <div>
  //       <input type="button" value="カウント2"
  //         onClick={ () => setCount2(count2 + 1) } />
  //       <p>{count2}回、クリックされました。</p>
  //     </div>
  //   </div>
  // );

  return useMemo(() => {
    console.log("MyCount4 is updated.");
    return (
      <div className="border">
        MyCount4
        <div>
          <input
            type="button"
            value="カウント2"
            onClick={() => setCount2(count2 + 1)}
          />
          <p>{count2}回、クリックされました。</p>
        </div>
      </div>
    );
  }, [count2, setCount2]);
}

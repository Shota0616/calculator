import React, { useState, useContext } from 'react';
import '../Calculator.css';
import { Context } from '../Context';

const App = () => {
  const { theme } = useContext(Context);

  // ==========================
  // 電卓ロジックの状態管理
  // ==========================
  const [currentValue, setCurrentValue] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [expression, setExpression] = useState('');

  // 数字・小数点ボタンを押したとき
  const handleInput = (val) => {
    setCurrentValue((prev) => {
      // 先頭が'0'の場合は置き換え、それ以外は連結
      if (prev === '0') {
        return val === '.' ? '0.' : val;
      } else {
        // 小数点を重複して入力しないようにする
        if (val === '.' && prev.includes('.')) {
          return prev; 
        }
        return prev + val;
      }
    });
    setExpression((prev) => prev + val);
  };

  // DELボタン(1文字削除)
  const handleDelete = () => {
    setCurrentValue((prev) => {
      if (prev.length <= 1) return '0';
      return prev.slice(0, -1);
    });
    // 計算式(expression)も一文字削る
    setExpression((prev) => {
      if (prev.length === 0) return '';
      return prev.slice(0, -1);
    });
    
  };

  // 演算子ボタン
  const handleOperation = (op) => {
    setPrevValue(currentValue);
    setCurrentValue('0');
    setOperation(op);
    setExpression((prev) => prev + ' ' + op + ' ');
  };

  // RESETボタン
  const handleReset = () => {
    setCurrentValue('0');
    setPrevValue(null);
    setOperation(null);
    setExpression('');
  };

  // = ボタン（計算実行）
  const handleEquals = () => {
    if (prevValue === null || operation === null) return;

    const curr = parseFloat(currentValue);
    const prev = parseFloat(prevValue);

    let result = 0;
    switch (operation) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case 'x':
        result = prev * curr;
        break;
      case '/':
        if (curr === 0) {
          // 0除算への対応（エラー表示などお好みで）
          result = 0;
        } else {
          result = prev / curr;
        }
        break;
      default:
        break;
    }
    setCurrentValue(result.toString());
    setPrevValue(null);
    setOperation(null);
  };

  return (
    <div className={`calculator__wrapper ${theme.palette.mode === 'light' ? 'theme-1' : 'theme-2'}`}>
      <div className="calculator">
        {/* ---------- ディスプレイ部分 ---------- */}
        <div className="calculator__display">
          <div className="calculator__expression">{expression}</div>
          <div className="calculator__current-value">{currentValue}</div>
        </div>

        {/* ---------- キーパッド部分 ---------- */}
        <div className="calculator__keys">
          {/* 数字キー */}
          <button className="key key--light" onClick={() => handleInput('7')}>
            7
          </button>
          <button className="key key--light" onClick={() => handleInput('8')}>
            8
          </button>
          <button className="key key--light" onClick={() => handleInput('9')}>
            9
          </button>
          <button className="key key--del" onClick={handleDelete}>
            DEL
          </button>
          <button className="key key--light" onClick={() => handleInput('4')}>
            4
          </button>
          <button className="key key--light" onClick={() => handleInput('5')}>
            5
          </button>
          <button className="key key--light" onClick={() => handleInput('6')}>
            6
          </button>
          <button className="key key--light" onClick={() => handleOperation('+')}>
            +
          </button>
          <button className="key key--light" onClick={() => handleInput('1')}>
            1
          </button>
          <button className="key key--light" onClick={() => handleInput('2')}>
            2
          </button>
          <button className="key key--light" onClick={() => handleInput('3')}>
            3
          </button>
          <button className="key key--light" onClick={() => handleOperation('-')}>
            -
          </button>
          <button className="key key--light" onClick={() => handleInput('.')}>
            .
          </button>
          <button className="key key--light" onClick={() => handleInput('0')}>
            0
          </button>
          <button className="key key--light" onClick={() => handleOperation('/')}>
            /
          </button>
          <button className="key key--light" onClick={() => handleOperation('x')}>
            x
          </button>

          {/* RESETボタン */}
          <button className="key key--reset" onClick={handleReset}>
            RESET
          </button>
          {/* = ボタン */}
          <button className="key key--equals" onClick={handleEquals}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

'use strict';

{
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  document.getElementById("Today").textContent = `${year}年${month}月${day}日`;

  let text = document.getElementById('text');//入力フォーム部品
  const button = document.getElementById('Add');//追加ボタン
  const table = document.getElementById('targetTable');//HTMLで用意したtableを取得する
  
  button.addEventListener('click', () => {
    let newRow = table.insertRow(); 
    let newCell = newRow.insertCell();
    let newText = document.createTextNode(`${text.value}`);
    newCell.appendChild(newText);

    const done = document.createElement('button');
    done.textContent = '完了';
    
    newCell = newRow.insertCell();//追加した行に対して、insertCell()メソッドでセルを作成
    newText = document.createTextNode(`${done}`);
    newCell.appendChild(done);//作成したテキストをnewCellに追加

    text.value = '';
    text.focus();
  });
}

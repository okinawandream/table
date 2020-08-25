'use strict';

{
  let table = document.getElementById('targetTable');//HTMLで用意したtableを取得する
  let newRow = table.insertRow();  //取得したtableにinsertRow()メソッドで1行追加。追加した行を newRow という変数に格納

  let newCell = newRow.insertCell();//追加した行に対して、insertCell()メソッドでセルを作成。
  let newText = document.createTextNode('山田');
  newCell.appendChild(newText);

  newCell = newRow.insertCell();
  newText = document.createTextNode(18);
  newCell.appendChild(newText);
 
}
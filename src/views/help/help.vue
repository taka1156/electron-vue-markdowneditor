<template>
  <div>
    <base-title1>Help</base-title1>

    <p>
      electronとvueで作成されたマークダウンエディターです
    </p>

    <h2>&lt;主な機能&gt;</h2>
    <div class="border" />
    <section>
      <h2>
        <img src="@/assets/edit.svg" />
        Edit:
      </h2>
      <ul>
        <li>通常</li>
        <p>
          左側に入力欄、右にマークダウン変換後のプレビューになっており、
          入力側をスクロールすると、プレビュー側も動きます
        </p>
        <li>スライドモード</li>
        <p>
          左側が入力欄であるのは変わりませんが、右側がスライドモードになります。<br />
          <code>```</code
          >や<code>***</code>を区切りとして、一枚のスライドを構成します。<br />
          また、スライドの<code>「」</code>ボタンを押すことでフルスクリーンにすることもできます
        </p>
      </ul>
      <div class="box">
        <table>
          <thead>
            <tr>
              <th>ショートカットキー</th>
              <th>機能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>shift + p</th>
              <th>スライドのいずれかのUIに触った状態で押すと1つ前に戻ります</th>
            </tr>
            <tr>
              <th>shift + n</th>
              <th>スライドのいずれかのUIに触った状態で押すと1つ後に進みます</th>
            </tr>
            <tr>
              <th>フルスクリーン状態でesc</th>
              <th>フルスクリーンの解除</th>
            </tr>
            <tr>
              <th>入力欄をクリックした状態で<br />shift + s</th>
              <th>
                保存処理(新規ファイルの場合は、保存場所を指定するウィンドウが出ます。)
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div class="border" />
    <section>
      <h2>
        <img src="@/assets/file.svg" class="icon" />
        File:
      </h2>
      <div class="box">
        <p>
          フォルダに保存したファイルを一覧で表示します。<br />
          デフォルトではOS固有のドキュメントフォルダに<strong>md</strong>という
          フォルダを作成しその中に保存します。
        </p>
        <p>
          <strong>
            始めてこのアプリを開いた場合、mdフォルダの中に、CheetSheet.md<br />
            というファイルが作られます。(マークダウン及びスライドの見本として使ってください)
          </strong>
        </p>
      </div>
    </section>

    <div class="border" />
    <section>
      <h2>
        <img src="@/assets//setting.svg" />
        Setting:
      </h2>
      <div class="box">
        <p>
          開発中
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import BaseTitle1 from '@/components/atoms/BaseTitle/BaseTitle1';

export default {
  name: 'Help',
  components: {
    'base-title1': BaseTitle1
  }
};
</script>

<style scoped>
ul,
li {
  list-style-type: none;
}

table,
th {
  border: 1px solid black;
  border-collapse: collapse;
}

.box {
  margin-left: 40px;
}
</style>

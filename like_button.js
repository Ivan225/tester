<!DOCTYPE html>
<html>
  <head>
    <meta charset = "UTF-8"/>
    <title> Приветствие </title>
    <script src ="https://unpkg.com/react@16/umd/react.development.js"> </script>
    <script src ="https://unpkg.com/react-dom@16/umd/react-dom.development.js"> </script>
    
    <!-- Не используйте это в производстве: -->
    <script src ="https://unpkg.com/@babel/standalone/babel.min.js"> </script>
  </head>
  <body>
    <div id ="root"> </div>
    <script type ="text/babel">
    <div id="like_button_container"></div>
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

  <!-- Загрузим наш React-компонент. -->
  <script src="like_button.js"></script>
      ReactDOM.render (
        <h1> Здорово, волчара! </h1>,
        document.getElementById('root')
      );

    </script>
    <!--
      Примечание: эта страница - отличный способ попробовать React, но она не подходит для производства.
      Он медленно компилирует JSX с Babel в браузере и использует большую сборку React для разработки.

      Прочтите этот раздел для готовой к установке установки с JSX:
      https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project

      В более крупном проекте вы можете использовать вместо этого интегрированный набор инструментов, включающий JSX:
      https://reactjs.org/docs/create-a-new-react-app.html

      Вы также можете использовать React без JSX, в этом случае вы можете удалить Babel:
      https://reactjs.org/docs/react-without-jsx.html

	А это стартовый код, куда его вставлять?

	'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
	
    -->
  </body>
</html>
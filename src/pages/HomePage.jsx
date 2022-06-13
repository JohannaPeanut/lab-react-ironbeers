import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <div>
            <img className="wallpaper" src="/images/beer-bar.png" alt="" />
            <article>
                <h1><Link to='/beers'>All Beers</Link></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut.</p>
            </article>
        </div>
        <div>
            <img className="wallpaper" src="/images/new-beer.png" alt="" />
            <article>
                <h1><Link to='/random-beer'>Random Beer</Link></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut.</p>
            </article>
        </div>
        <div>
            <img className="wallpaper" src="/images/beer.png" alt="" />
            <article>
                <h1><Link to='/new-beer'>New Beer</Link></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut.</p>
            </article>
        </div>
            

    </div>
  )
}

export default HomePage
const homePage = `<div class="home">
        <h1>Best Pizza</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet
        molestiae doloribus, mollitia quod iusto consequatur natus similique
        inventore eaque, perspiciatis ex laudantium omnis corrupti sequi.
        Consectetur minus aut tenetur. Error, tempora magnam magni ullam laborum
        facere illum nihil placeat aliquam porro ut perspiciatis iure voluptates
        fugiat soluta odit dolorum cupiditate, voluptate repudiandae eius
        quisquam reiciendis! Sequi, aliquam? Modi, est.
      </p>

        <div class="popular">
            <h1>Popular and Trending</h1>
        <div class="container">
             <div class="box">
                <div class="boxOne"></div>
                <h2>Original Pep Pizza</h2>
                <div class="desc"> facere illum nihil placeat... </div>
            </div>

            <div class="box">
                <div class="boxTwo"></div>
                <h2>Classic Meaty Pizza</h2>
                <div class="desc"> Consectetur minus aut tenetur... </div>
            </div>

            <div class="box">
                <div class="boxThree"></div>
                <h2>Three Pizza Special</h2>
                <div class="desc"> omnis corrupti sequi... </div>
            </div>

            <div class="box">
                <div class="boxFour"></div>
                <h2>Best Wings</h2>
                <div class="desc"> ipsum dolor sit amet consectetur adipisicing... </div>
            </div>
        </div>
        </div>
      </div>`;
const productsPage = `<div class="products">
        <h1>Products</h1>
            <h1>Popular and Trending</h1>
        <div class="container">
             <div class="box">
                <div class="boxOne"></div>
                <h2>Original Pep Pizza</h2>
                <div class="desc"> facere illum nihil placeat... </div>
            </div>

            <div class="box">
                <div class="boxTwo"></div>
                <h2>Classic Meaty Pizza</h2>
                <div class="desc"> Consectetur minus aut tenetur... </div>
            </div>

            <div class="box">
                <div class="boxThree"></div>
                <h2>Three Pizza Special</h2>
                <div class="desc"> omnis corrupti sequi... </div>
            </div>

            <div class="box">
                <div class="boxFour"></div>
                <h2>Best Wings</h2>
                <div class="desc"> ipsum dolor sit amet consectetur adipisicing... </div>
            </div>
        </div>
        
      </div>`;

const aboutPage = `<div class="about">
        <h1>About</h1>
        
      </div>`;
const contactPage = `<div class="contact">
        <h1>Contact</h1>
        
      </div>`;
export function changePage(pageName) {
  let pageVarName = pageName + "Page";
  //   console.log(pageVarName);
  $("#app").html(eval(pageVarName));
}

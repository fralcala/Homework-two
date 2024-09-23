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
        <h1>Classic</h1>
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
                <h2>Three Pizza Classic</h2>
                <div class="desc"> omnis corrupti sequi... </div>
            </div>

            <div class="box">
                <div class="boxFour"></div>
                <h2>Classic Best Wings</h2>
                <div class="desc"> ipsum dolor sit amet consectetur adipisicing... </div>
            </div>
        </div>
        
      </div>`;

const aboutPage = `<div class="about">
        <h1>About</h1>

        <div class="about-picOne"></div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius praesentium
    nulla cumque maiores, delectus id? Explicabo vitae cupiditate et. Vitae,
    quasi quam. Cum, temporibus quaerat iure porro dolores magni. Ea, quam!
    Vitae cumque dignissimos quaerat excepturi blanditiis, quae optio amet,
    aspernatur quos molestiae repellat culpa. Vitae odit necessitatibus quae,
    provident adipisci voluptatum est officiis iste commodi quo doloremque
    molestias? Molestiae, illo. Aspernatur dolore nisi, vero error laudantium
    aliquam possimus obcaecati sunt dignissimos temporibus et fugiat molestiae
    eligendi reprehenderit amet iure odit pariatur molestias, ullam corrupti
    accusantium animi ipsa fuga! Sed nostrum iusto, eveniet enim mollitia
    incidunt deserunt inventore quos! Aliquid quidem adipisci fuga, cupiditate
    delectus placeat porro quia, at natus odio eveniet tempora? Quam facere
    perferendis consequatur modi nesciunt. Omnis nulla, libero minima doloremque
    unde vitae totam illum itaque ducimus dolorum veritatis enim, tempore nobis
    voluptate culpa eveniet? Corrupti, animi quis. Autem impedit non nesciunt,
    repellendus quam quos laudantium!</p>

        <div class="about-picTwo"></div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, minus ipsa, at ullam cum suscipit deserunt possimus perspiciatis odit sed ut nisi cupiditate pariatur dolorum, vitae ducimus. Odit, distinctio! Fugiat?
        Tenetur recusandae non sapiente animi blanditiis dolor, vel deleniti obcaecati quo facere dolorem, quibusdam accusamus vitae iusto maiores harum illum possimus. At officiis repudiandae hic asperiores, ducimus sapiente quod velit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum beatae molestiae doloribus? Unde accusantium, eveniet consequatur, voluptate exercitationem earum numquam labore maxime vel, iure cum. Eum cumque modi ipsam fuga.
        Quo fuga iure illo corporis beatae quos assumenda. Aliquam nisi laboriosam, numquam nam voluptate eaque itaque nostrum deserunt culpa, obcaecati nesciunt non! Natus iste possimus atque. Aut, beatae delectus. Sed?</p>

        <div class="about-picThree"></div>
        
      </div>`;
const contactPage = `<div class="contact">
        <h1>Contact</h1>
        
      </div>`;
export function changePage(pageName) {
  let pageVarName = pageName + "Page";
  //   console.log(pageVarName);
  $("#app").html(eval(pageVarName));
}

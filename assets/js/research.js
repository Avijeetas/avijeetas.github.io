/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "An Improved K-means Clustering Algorithm Towards an Efficient Data-Driven Modeling",
    authors:
      "Md Zubair, MD Asif Iqbal, Avijeet Shil, Enamul Haque, Mohammed Moshiul Hoque, Iqbal H Sarke",
    conferences:
      "Hybrid Intelligent Systems: 20th International Conference on Hybrid Intelligent Systems (HIS 2020), December 14-16, 2020",
    researchYr: 2022,
    citebox: "popup1",
    image: "https://media.springernature.com/full/springer-static/image/art%3A10.1007%2Fs40745-022-00428-2/MediaObjects/40745_2022_428_Fig4_HTML.png?as=webp",
    link : "https://link.springer.com/article/10.1007/s40745-022-00428-2",
    citation: {
      APA:
      "Md Zubair, MD Asif Iqbal, Avijeet Shil, MJM Chowdhury, Mohammad Ali Moni, Iqbal H Sarker"

    },
    abstract:
      "K-means algorithm is one of the well-known unsupervised machine learning algorithms. The algorithm typically finds out distinct non-overlapping clusters in which each point is assigned to a group. The minimum squared distance technique distributes each point to the nearest clusters or subgroups. One of the K-means algorithm’s main concerns is to find out the initial optimal centroids of clusters. It is the most challenging task to determine the optimum position of the initial clusters’ centroids at the very first iteration. This paper proposes an approach to find the optimal initial centroids efficiently to reduce the number of iterations and execution time. To analyze the effectiveness of our proposed method, we have utilized different real-world datasets to conduct experiments. We have first analyzed COVID-19 and patient datasets to show our proposed method’s efficiency. A synthetic dataset of 10M instances with 8 dimensions is also used to estimate the performance of the proposed algorithm. Experimental results show that our proposed method outperforms traditional kmeans++ and random centroids initialization methods regarding the computation time and the number of iterations.",
      absbox: "absPopup1",
  },
  {
    title: "An efficient k-means clustering algorithm for analysing covid-19",
    authors:
      "Md Zubair, MD Asif Iqbal, Avijeet Shil, Enamul Haque, Mohammed Moshiul Hoque, Iqbal H Sarke",
    conferences:
      "Hybrid Intelligent Systems: 20th International Conference on Hybrid Intelligent Systems (HIS 2020), December 14-16, 2020",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/inteferenceNetwork.png",
    link : "link.springer.com/chapter/10.1007/978-3-030-73050-5_43",
    citation: {
      APA:
        "Zubair, M., Asif Iqbal, M. D., Shil, A., Haque, E., Moshiul Hoque, M., & Sarker, I. H. (2021). An efficient k-means clustering algorithm for analysing covid-19. In Hybrid Intelligent Systems: 20th International Conference on Hybrid Intelligent Systems (HIS 2020), December 14-16, 2020 (pp. 422-432). Springer International Publishing.",
    },
    abstract:
      "COVID-19 hits the world like a storm by arising pandemic situations for most of the countries around the world. The whole world is trying to overcome this pandemic situation. A better health care quality may help a country to tackle the pandemic. Making clusters of countries with similar types of health care quality provides an insight into the quality of health care in different countries. In the area of machine learning and data science, the K-means clustering algorithm is typically used to create clusters based on similarity. In this paper, we propose an efficient K-means clustering method that determines the initial centroids of the clusters efficiently. Based on this proposed method, we have determined health care quality clusters of countries utilizing the COVID-19 datasets. Experimental results show that our proposed method reduces the number of iterations and execution time to analyze COVID-19 while comparing with the traditional k-means clustering algorithm.",
    absbox: "absPopup1",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
      link
    }) =>
      (output += `
            <tr data-aos=""> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="${link}" class="paperTitle" target="_blank"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.APA}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

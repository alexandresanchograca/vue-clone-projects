<template>
  <div class="main-content">
    <AdBanner></AdBanner>
    <div class="page-container">
      <div v-if="newsDetails" class="news-details-container">
        <div class="news-title">
          <GreenPill :hollow="true">Impostos</GreenPill>
          <h1>{{ newsDetails.title }}</h1>
          <div class="news-info">
            <div v-if="newsDetails.author" class="author-details">
              <p>{{ newsDetails.author }}</p>
              <p>{{ newsDetails.publishedAt.substring(0, 10) }}</p>
            </div>
            <IconsSlot>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </IconsSlot>
            <IconsSlot>
              <i class="fa-regular fa-comment"></i>
            </IconsSlot>
          </div>
        </div>
        <div v-if="content" class="news-content">
          <h3 v-html="content[0]"></h3>
          <div v-for="(paragraph, index) in content.slice(1)" :key="paragraph">
            <p v-html="paragraph"></p>
            <AdVideo v-if="index === 1" class="video-ad"></AdVideo>
          </div>
        </div>
      </div>
      <LatestNewsSidebar/>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const {manchetes} = await useNews();
provide("manchetesNews", manchetes);

const {data: newsDetails} = await useFetch<Article>(`/api/news${route.fullPath}`);

//Adding content due to external API limitation that truncates at 200chars
const aditionalContent = ". O Fundo adianta que uma reforma fiscal “abrangente” iria permitir reduzir “distorções e aumentaria as receitas”, designadamente através de uma “simplificação do sistema e da redução de isenções, o que compensaria “as perdas decorrentes das reduções pretendidas no imposto sobre os rendimentos de singulares e coletivos”. " +
    "A equipa do FMI considera que os novos cortes fiscais e os aumentos de despesas planeados devem ser cuidadosamente concebidos” para assegurar que as contas públicas se mantêm equilibradas — e até com excedente em 2024. Caso contrário, terá de haver uma compensação através der outras medidas, avisa." +
    "Segundo o Fundo, uma política “algo expansionista” deste ano, e sendo consistente com o excedente de 0,2% ou 0,3% previsto pelo Governo, seria “apropriada”, pois “apoiaria o crescimento” económico, enquanto as taxas de juro ainda em níveis elevados conteriam as pressões inflacionistas." +
    "Para 2025, recomenda o FMI, o Governo deveria passar para uma “orientação orçamental globalmente neutra”, quando se espera que o Banco Central Europeu (BCE) alivie a sua política monetária para níveis mais flexíveis. Isso “ajudará a alcançar uma aterragem suave”, apontam os técnicos do Fundo. " +
    "“A médio prazo, a posição orçamental deverá manter-se globalmente equilibrada”, acrescenta o FMI. “Isto garantirá que a dívida ainda elevada continue a diminuir, reduzindo assim a vulnerabilidade às mudanças no sentimento do mercado e reconstruindo as reservas para choques futuros“, conclui.";

const content = computed(() => {
  if (newsDetails.value?.content) {
    const tempContent = newsDetails.value.content + aditionalContent;

    let c = 0;
    const result = [];
    for (let i = 0; i <= tempContent.length; i++) {
      if ((i - c) > 200 && tempContent.charAt(i) === '.' || i == tempContent.length) {
        result.push(tempContent.substring(c, i + 1) + "<br><br>");
        c = i + 1;
      }
    }
    return result;
  }
  return null;
})
</script>


<style scoped>
.page-container {
  display: flex;
}

.news-details-container {
  margin: 50px 0;
  width: 75%;
}

.news-title h1 {
  font-weight: bold;
  font-size: clamp(1.2rem, 4vw, 3.2rem);
}

.news-title h1 {
  font-weight: bold;
  text-decoration: none;
}

.news-content h3 {
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
  color: #00af00;
}

.news-info {
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: flex-start;
  margin: 50px auto;
}

.news-content p {
  font-size: 1.2rem;
  line-height: 1.8rem;
}

.author-details {
  font-size: 0.9rem;
}

.author-details > :first-child {
  font-weight: bold;
}

.video-ad {
  margin-bottom: 40px;
}
</style>

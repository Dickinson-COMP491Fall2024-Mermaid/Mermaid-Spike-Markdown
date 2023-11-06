import './App.css';
import React, { useState, useEffect } from 'react';
import Chartcard from './components/chartcard';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';

const App = () => {
  return (
  <div>    
    <Container maxWidth="lg" sx={{borderWidth: 10, padding: 10}} >
    <Grid container sx={{flexGrow: 1}} spacing={2}>
      <Grid item xs>
        <Chartcard chartpreview="/charts_preview/gantt.png" name="MyDay" editlink="https://mermaid.live/edit#pako:eNp1kk1vgzAMhv-KlTNIBIq65baOdj2MHbZJ1SQuFrgtokmqEDahqv994aMt1TSfojev7SeOTyzXBTHBdqiszRS4sKU9EKQtJNgOSoGWVtpItABp6ieJ_-XCHcV6PThqym2pFaTaqFLtBnGDFTVHuIZA7kEw83noh0EYQfAggsADHsvB_0IWEkN1TcXo31oygBzAg4tp6SAWhrDaYm07E0TBeLXWkn60qfpc4Puxqgar4fmAdd2pvfse-qlro7RWtw6vjcr3A8QEmIcO2LFEF5g3HJ8n4PFCsbkRXMlWhgg-S0m9DjCP_0Asv-k2uQ4hKZVyr78HmIvITWwW_1OXX8kms5gWCIO-AI-DyczfCYsW3AfDop_8XULU_1EcS-YxSW4HysKty6nLzpjdk6SMCXcs0FQZy9TZ-bCx-qNVORPWNOSx5thtUFLizqBkYouH2qlUlFabdNi_fg3Pv8EltMQ">
        </Chartcard>
      </Grid>
      <Grid item xs>
        <Chartcard chartpreview="/charts_preview/gitchart.png" name="Git graph" editlink="https://mermaid.live/edit#pako:eNqFUjtvwyAQ_ivo5ihqVs91HlLbwakysVzhYqMEsDBUiqL894DtNsZSUySW-153HFcQVhIUUCu_cdg23LB4hNVaeeaxLhiH1fJlueKQQUomZE3ogyP2QSRJcmD-0lLBtrvN9i3ez0Hy5dCIhh0H8mjTkDjZ4GfV3jwLGpN2XReIrW0wj5iqPJTVvsxCVOLNIqa1acAPrlGZJ_BErsnV9B8_m2hQ9BbZJBV19vyd3uwP5-fNDfQxabaMh_Xv_uIGOcACoiz6ybjva_KJjIY0cUgsie6UurlFHgZv9xcjoPAu0AJCK9HTq8LaoYbiiOcuVkkqb9378IH6f3S7A95mwXE">
        </Chartcard>
      </Grid>
      <Grid item xs>
        <Chartcard chartpreview="/charts_preview/flowchart.png" name="COMP curriculum" editlink="https://mermaid.live/edit#pako:eNqdVN9PwjAQ_leaPhhMUGm7ofCgGT8efCAhgbeNmLoVWLKtZCuKWfjfva6t0QEx2pde777b3fdduxrHMhF4iNeZfI-3vFRoOYkKBGtWz7jaHtHNzSMi9z3jBCPUbm2smhAlxHjAWBnQpaXhjNFwLPOdNiwcEk2IeDZEvO-hW13ljh0OL9NMxCp9E52wOSN3Xl0b1DQqfnYwr-el3JQ8z9Nig67QIk5FodJ1GqOxLEVDjrCeKQvGLwTOESKOEPki9Jd06tLpv9JBRTsYRp2IbRGmndAJVWmldNUes8Ozu0daOfbrdjJ-3-x9z-z3D2YfsHaxZb2UMqtA63nJoWYsKnuFBk7mQVtm8JguHISeQKiFMAdhFyHegBgIGGcUNRDqIFr0n6CgDl4r1TQvC01k8VEpkVsa1O_bHv1-m4YdAUTOlNX3Mxh1Qvdx9JzvMpHDdeS6kB0M893z8M9dh2DUoJ4uRpjv3pDvnTCjtsFghLs4F2XO0wSefq1REVZb6CbCQzATseb7TEU4Ko4A5XslFx9FjIeq3Isu3u8SrsQk5fpl4eGaZxV4RZIqWc7M76T5qxw_AYxMBdE">
        </Chartcard>
      </Grid>
      <Grid item xs>
        <Chartcard chartpreview="/charts_preview/piechart.png" name="Class Pie Chart" editlink="https://mermaid.live/edit#pako:eNqFU01P4zAQ_SuWz6gV7bKgHBc47AGE1GsuU3uSjnA8wR-VIsR_34mdLAWttCc7M2-e33t23rVhi7rRI2HrlWr1b58weEjEHpw65kgeY9ymABa3hocBg8FWq0ZdX9eJF3aUyAg6GkJvUIG3quez8AzoUwHfbe4WdJzMiR33U6nfbna1_mjY84ApkImF4C2DT5REyRkVlq60ytCPzc3l0Gd5_y8PAV3ZVlroOqDwbeAXFUXbY1kvvSzACnvGHHhplPp-dfXoe0fxpBz4PkNfI5BYMEDKYQXfVvATpBMOomnRvV_tHNiQHD3PjidyHFmWWUzH2dvFBHcKbTblaxn_dGGEmGIKUyEZ2KHJDoKqxqav-MMI_r-il1vLR0dGjXLVZuYGN0Wq6nebn2sGZwpcrnzOL2VLuEKWAO95GLPwq8sQ_3a_EXyB7PSVlqc3AFl5re91YI5RAI1sLYTXVrf-Q3CQEx8mb3STQsYrnUfJDh8I-gCDbjpwUapoKXF4qs-__AUffwBsiQQz">
        </Chartcard>
      </Grid>
      <Grid item xs>
        <Chartcard chartpreview="/charts_preview/quadrant.png" name="Class Quadrant" editlink="https://mermaid.live/edit#pako:eNpVUl1vm0AQ_Cune7YtDBgDD5VSx21U1VIkV-pD6cMKLmab485dH25olP_e4z6imhfQzOzs7rCvvNWd4DX_PUJHoMyuBzKNYvYxaKRgR6FQk30NqICYp16W8IIX9jiZXiu2V7_0JIgtlx_YF7gC-6qvgrxy8spPo1KTEzygBEI9XhrlFUc99lCzH8kqqRYsWZXFz0AAOjgtZnhbBvggpJ0zlFSOK9aB-45SIgyOWju3PFLf4OzhbIaT6Hb_d1QnRxROn7x31-cefZMynZkqDcyuJ7wYBOXIzfbWL9qlzq7YBHxvJ_YFmXMr41yHiXyXbTnjWR7wj0KeMFQ4qyxaHbDtQUg_Wu6yySIF1AYmy2_WuVMdiT__55kE5pH008pWtjtNA7bPTpO7YYq48gOgROEZH2v0_WxzCPm5vdLNe95KCfKjuMiruNkdkPaLVdlNsPtriKhYh1_HF3wQNAB29kRfZ1XDTS8G0fDafnZAzw1v1JvVwWj0cVItrw2NYsHHcwdG3COcCAZeP4G8WFR0aDQd_M2703_7B5YY1PA">
        </Chartcard>
      </Grid>
      <Grid item xs>
        <Chartcard chartpreview="/charts_preview/sankey.png" name="Game Sankey" editlink="https://mermaid.live/edit#pako:eNqFUttKxDAQ_ZUhICjUaOu2dfvm5UHwCvUC0pe4md0Nm2SWJEVX8d-ddVEKKj4lmZwLc2bexIQ0ikZE5Re42n3CpDrf-a0tiKnXhrJkksUMEiVlYUJLgxEiWQ3bzlhryMedzl8Zn9BryuBSBUNwrkKCQzhF278wuSzlqBqijrxxLHcSKEbjZw1c4TOcUTCvrJfBqJD1eIhv-yUGaJ2KczhmkoQ7m1gisfhBLut6CL6dI1zgjB9AU3hEq1XDLFRpvi4k_n4wVjNzX1blT5tNC9d6FSOuMigqORoNUTe0QEce2mcKeq-dG1yLFaUcF7_CJipYTHv3hvhgYCGr6i_XGw6OPfOxPBj_29MtqhC_WjrnHDU55h7KMh9y19kOPOJXgt_jyWuZ1yITDoNTRvM2vHUeoBOs67ATDV-1CotOdP6dcapP1K78RDQp9JiJfql5EqdGzYJyopkqG7mK2iQKl5v1-tyy9w-a_9Du">
        </Chartcard>
      </Grid>
    </Grid>
    </Container>
  </div>
  );
};
export default App;
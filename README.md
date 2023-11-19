<h2>Motivation</h2>
<a href='https://pagespeed.web.dev/'>Page speed insight</a> is great but what if you want to do it many times ?


<h2>Setup</h2>
<ul>
<li><a href='https://developers.google.com/speed/docs/insights/v5/get-started#key'>get api key</a>--> choose 'Create new project' --> enter project name ('pagespeed-insight-api-test') --> click 'Show Key' -->click done --> put it in .env.local </li>
</ul>

<h2>References</h2>
<ul>
<li><a href='https://developers.google.com/speed/docs/insights/v5/get-started'>Get started</a></li>
</ul>

<h2>todo</h2>
<ul>
<li>currently the infos: IGetPsiInfo[] is hard code in data\infos.ts - need some ui to choose it in case this is an external tool</li>
<li>use score in percentage and add color red ,greed , orange according to page speed insight</li>
<li>mark the loweset score per category</li>
<li>implementation : the categories : performance ,accessibility, bestPractices,seo are used by me as speperate properties e.g. in IGetPsiInfo as bool or it might save  code by using map with enum e.g. CategoryGoogleApi </li>
<li>might be nice to store results on google drive in some way and see statistics</li>
</ul>

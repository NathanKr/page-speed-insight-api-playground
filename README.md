<h2>Motivation</h2>
<p><a href='https://pagespeed.web.dev/'>Page speed insight</a> is great but what if you want to do it many times ?</p>
Why do you want to do it many times ?
<ul>
<li>because you make changes often and you want to see if perfroamce has degargated</li>
<li>because you have many pages</li>
<li>because page speed insight give results that may differ so you want to invoe it few times and avarage results</li>
</ul>

<h2>Installation</h2>

Install packages using npm , or yarn on pnpm as follwos
```
pnpm i 
```


<h2>Setup</h2>
<ul>
<li>Perform once <a href='https://developers.google.com/speed/docs/insights/v5/get-started#key'>get api key</a>--> choose 'Create new project' --> enter project name ('pagespeed-insight-api-test') --> click 'Show Key' -->click done --> put it in .env.local </li>
<li>navigate to the project root and

```
npm run dev
```

</li>
</ul>

<h2>Save data /api/psi</h2>
<p>The psi sample is saved by default to mongodb. you can disable it via PSI_API_SAMPLE_SAVE_TO_MONGODB. Otherwise you need to define DB_NAME and MONGODB_URI in .env.local</p>


<h2>References</h2>
<ul>
<li><a href='https://developers.google.com/speed/docs/insights/v5/get-started'>Get started</a></li>
</ul>

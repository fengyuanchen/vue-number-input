<template>
  <div class="app">
    <header class="navbar navbar-light navbar-expand-md">
      <nav class="container">
        <a class="navbar-brand" href="./">{{ name }}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbar-collapse" role="navigation">
          <nav class="nav navbar-nav">
            <a class="nav-link" :href="`//github.com/${pkg.repository}`" title="View the GitHub project">GitHub</a>
            <a class="nav-link" :href="`//github.com/${pkg.repository}/blob/master/LICENSE`">License</a>
            <a class="nav-link" :href="pkg.author.url" title="About the author">About</a>
          </nav>
        </div>
      </nav>
    </header>
    <main>
      <div class="jumbotron bg-primary text-white rounded-0">
        <div class="container">
          <div class="row">
            <div class="col-md">
              <h1>{{ name }} <small class="h6">v{{ pkg.version }}</small></h1>
              <p class="lead">{{ pkg.description }}</p>
            </div>
            <div class="col-md">
              <div class="carbonads" ref="carbonads"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="markdown-body">
          <readme></readme>
        </div>
      </div>
    </main>
    <footer>
      <div class="container">
        <p class="heart"></p>
        <nav class="nav flex-wrap justify-content-center mb-3">
          <a class="nav-link" :href="`//github.com/${pkg.repository}`">GitHub</a>
          <a class="nav-link" :href="`//github.com/${pkg.repository}/blob/master/LICENSE`">License</a>
          <a class="nav-link" :href="pkg.author.url">About</a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
  import pkg from '../../package.json';
  import Readme from '../README.md';

  export default {
    components: {
      Readme,
    },

    data() {
      return {
        pkg,
        name: pkg.name.split('/').reverse()[0],
      };
    },

    mounted() {
      const script = document.createElement('script');

      script.async = true;
      script.id = '_carbonads_js';
      script.src = '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=fengyuanchen';
      this.$refs.carbonads.appendChild(script);
    },
  };
</script>

<style>
  .markdown-body table {
    display: table;
  }

  .carbonads {
    border-radius: .25rem;
    border: 1px solid #ccc;
    font-size: .875rem;
    overflow: hidden;
    padding: 1rem;
  }

  .carbon-wrap {
    overflow: hidden;
  }

  .carbon-img {
    clear: left;
    display: block;
    float: left;
  }

  .carbon-text,
  .carbon-poweredby {
    display: block;
    margin-left: 140px;
  }

  .carbon-text,
  .carbon-text:hover,
  .carbon-text:focus {
    color: #fff;
    text-decoration: none;
  }

  .carbon-poweredby,
  .carbon-poweredby:hover,
  .carbon-poweredby:focus {
    color: #ddd;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    .carbonads {
      float: right;
      margin-bottom: -1rem;
      margin-top: -1rem;
      max-width: 360px;
    }
  }

  .heart {
    color: #ddd;
    display: block;
    height: 2rem;
    line-height: 2rem;
    margin-bottom: 0;
    margin-top: 1rem;
    position: relative;
    text-align: center;
    width: 100%;

    &:hover {
      color: #ff4136;
    }

    &::before {
      border-top: 1px solid #eee;
      content: '';
      display: block;
      height: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 50%;
    }

    &::after {
      background-color: #fff;
      content: '♥';
      padding-left: .5rem;
      padding-right: .5rem;
      position: relative;
      z-index: 1;
    }
  }
</style>

<template>
  <div class="flex justify-center bg-white py-10 px-6 content">
    <div>
      <div class="mb-4">
        <h1>CTO</h1>
        <h2>PT Cerita Teknologi Indonesia</h2>
        <h3><font-awesome-icon :icon="['fas', 'globe']" class="text-gray-500" /> <a href="https://restock.id">restock.id</a></h3>
        <div>Sep 2019 – Feb 2020</div>
        <div>Jakarta, Indonesia</div>
      </div>

      <div class="mb-4">
        <h1>CTO</h1>
        <h2>PT. Brodo Ganesha Indonesia</h2>
        <h3><font-awesome-icon :icon="['fas', 'globe']" class="text-gray-500" /> <a href="https://bro.do">bro.do</a></h3>
        <div>Dec 2016 – Aug 2019</div>
        <div>Jakarta, Indonesia</div>
      </div>

      <div class="mb-4">
        <h1>Lead Developer</h1>
        <h2>PT Bursa Interaktif Gemilang</h2>
        <h3><font-awesome-icon :icon="['fas', 'globe']" class="text-gray-500" /> <a href="https://brambang.com">brambang.com</a></h3>
        <div>Oct 2016 – Nov 2016</div>
        <div>Jakarta, Indonesia</div>
      </div>

      <div class="mb-4">
        <h1>Lead Developer</h1>
        <h2>PT Pikmiap Ekspres Global</h2>
        <h3><font-awesome-icon :icon="['fas', 'globe']" class="text-gray-500" /> <a href="https://pikmiap.com">pikmiap.com</a></h3>
        <div>Apr 2016 – Sep 2016</div>
        <div>Jakarta, Indonesia</div>
      </div>

      <div class="mb-4">
        <h1>CTO</h1>
        <h2>PT. Laju Video Media</h2>
        <h3><font-awesome-icon :icon="['fas', 'globe']" class="text-gray-500" /> <a href="https://lv8.tv">lv8.tv</a></h3>
        <div>Nov 2013 – Apr 2016</div>
        <div>Jakarta, Indonesia</div>
      </div>

      <div class="mb-4">
        <h1>Manager - Web Developer</h1>
        <h2>PT. Kreatif Media Karya</h2>
        <h3><font-awesome-icon :icon="['fas', 'globe']" class="text-gray-500" /> <a href="https://www.kmkonline.co.id">kmkonline.co.id</a> / <a href="https://liputan6.com">liputan6.com</a></h3>
        <div>Jul 2013 – Oct 2013</div>
        <div>Jakarta, Indonesia</div>
      </div>

      <div class="mb-4">
        <h1>Supervisor, Mid Developer</h1>
        <h2>Multiply</h2>
        <h3><font-awesome-icon :icon="['fas', 'globe']" class="text-gray-500" /> <a href="https://multiply.com">multiply.com</a></h3>
        <div>Dates EmployedSep 2012 – May 2013</div>
        <div>Jakarta, Indonesia</div>
      </div>

      <div class="mb-4">
        <h1>Developer (Part Time)</h1>
        <h2>PT Trijaya Dewata</h2>
        <h3><font-awesome-icon :icon="['fas', 'globe']" class="text-gray-500" /> <a href="http://trijayadewata.com/">trijayadewata.com</a> / <a href="https://www.baliplus.com/">baliplus.com</a></h3>
        <div>Aug 2011 – Aug 2012</div>
        <div>Denpasar, Bali, Indonesia</div>
      </div>

      <div class="mb-4">
        <h1>IT Developer</h1>
        <h2>Kemana.com</h2>
        <h3><font-awesome-icon :icon="['fas', 'globe']" class="text-gray-500" /> <a href="https://kemana.com">kemana.com</a></h3>
        <div>Nov 2009 – Jun 2010</div>
        <div>Denpasar, Bali, Indonesia</div>
      </div>

      <div class="mb-4">
        <h1>Web Programmer (Part Time)</h1>
        <h2>PT Baru di Bali</h2>
        <h3><font-awesome-icon :icon="['fas', 'globe']" class="text-gray-500" /> <a href="http://barudibali.com">barudibali.com</a></h3>
        <div>Jul 2009 – Oct 2009</div>
        <div>Denpasar, Bali, Indonesia</div>
      </div>

      <div class="mb-4">
        <h1>Web Developer (Contract)</h1>
        <h2>Harver Group, LLC</h2>
        <h3><font-awesome-icon :icon="['fas', 'globe']" class="text-gray-500" /> <a href="https://saywire.com">saywire.com</a></h3>
        <div>Aug 2006 – May 2009</div>
        <div>Remote (with US based company)</div>
      </div>

      <div class="mb-4">
        <h1>Web Programmer (Part Time)</h1>
        <h2>ABL Tours and Travel</h2>
        <h3><font-awesome-icon :icon="['fas', 'globe']" class="text-gray-500" /> <a href="https://baliwww.com/">baliwww.com</a></h3>
        <div>Jun 2008 – Aug 2008</div>
        <div>Denpasar, Bali, Indonesia</div>
      </div>

      <div class="mb-4">
        <h1>Various Positions</h1>
        <h2>PT Agranet Multicitra Siberkom</h2>
        <h3><font-awesome-icon :icon="['fas', 'globe']" class="text-gray-500" /> <a href="https://detik.com">detik.com</a></h3>
        <div>Jakarta, Indonesia</div>
        <h4>Research & Development Supervisor</h4>
        <div>Jun 2005 – Aug 2006</div>
        <h4>Mobile Platform Development Supervisor</h4>
        <div>Jan 2003 - Jun 2005</div>
        <h4>Online Platform Development Supervisor</h4>
        <div>Feb 2001 - Dec 2002</div>
        <h4>Senior Programmer</h4>
        <div>Jan 2000 – Jan 2001</div>
        <h4>Programmer</h4>
        <div>Nov 1995 – Dec 1999</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Work Experience'
    },

    created() {
      this.$store.commit('changeHeaderTitle', 'Work Experience');
      this.$store.commit('isHomepage', false);
    },

    mounted () {
      this.$store.commit('isMenuOpen', false);
    }
  }
</script>

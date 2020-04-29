import Vue from 'vue';

Vue.component('main-navbar', {
  template: `
    <!-- navbar -->
    <b-navbar toggleable="lg" type="light" variant="light">
       <div class="container">
        <b-navbar-brand href="/" class="font-weight-bold">threaded</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <!-- Center aligned nav items -->
            <!-- Right aligned nav items -->
            <b-navbar-nav class="mr-auto">
                <b-nav-item href="/careers">
                    Careers
                </b-nav-item>
                <b-nav-item href="/varsities">
                    Institutions
                </b-nav-item>
                <b-nav-item href="/ask-me-anything">
                    AMAs
                </b-nav-item>
                <b-nav-item href="/about">
                    About
                </b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="/get-started" class="active">
                    Contribute
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
        </div>
    </b-navbar>
  `,
});

Vue.component('career-form', {
  props: ['career'],
  template: `
    <div class="row">
        <div class="col-xs-12 col-md-9">
        <b-form-group>
            <b-form-input
                placeholder="Title"
                size="lg"
                name="career[title]"
                v-model="career.title"
                class="py-2"
            >
            </b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input
                placeholder="4 tags max, comma separated"
                size="lg"
                name="career[tag_list]"
                class="py-2"
            >
            </b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-textarea
                placeholder="(What it is, how to get started, salary, links)"
                debounce="300"
                size="lg"
                rows="14"
                name="career[description]"
                class="py-2"
            >
            </b-form-textarea>
        </b-form-group>
                <b-button
                    type="submit"
                    variant="success"
                    size="lg"
                >
                    Add career
                </b-button>
        </div>
        <div class="col-xs-12 col-md-3">
            <b-form-file
                size="lg"
                name="career[avatar]"
                class="py-2"
            >
            </b-form-file>
        </div>
    </div>
  `,
});
Vue.component('career-sidebar', {
  props: ['career'],
  template: `
    <div class="d-none d-md-block">
    <div class="py-2">
        <p class="text-muted">
            Contents
        </p>
    </div>
    <b-nav
        vertical
        pills
        nav-wrapper-class="w-50"
        v-b-scrollspy
        class="flex-column"
    >
        <b-nav-item
            href="#description"
            >What is {{ career.title }}
        </b-nav-item>
        <b-nav-item
            href="#how-to-get-started"
            >How to get started
        </b-nav-item>
        <b-nav-item
            href="#daily-routine"
            >A day in the life of
        </b-nav-item>
        <b-nav-item
            href="#salary"
            >Salary range
        </b-nav-item>
        <b-nav-item
            href="#links"
            >Further reading
        </b-nav-item>
        <b-nav-item
            href="#programmes"
            >Programmes
        </b-nav-item>
        <b-nav-item
            href="#conclusion"
            >Conclusion
        </b-nav-item>
    </b-nav>
    </div>
  `,
});

Vue.component('varsity-form', {
  props: ['varsity'],
  template: `
    <div class="w-75">
        <b-form-group>
            <b-form-input
                size="lg"
                placeholder="name of institution"
                name="university[name]"
            >
            </b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input
                size="lg"
                placeholder="address or website link"
                name="university[address]"
            >
            </b-form-input>
        </b-form-group>
        <b-form-group label="add picture">
            <b-form-file
                size="lg"
                name="university[avatar]"
            >
            </b-form-file>
        </b-form-group>
    <b-button
        variant="success"
    >
        Submit
    </b-button>
    </div>
  `,
});
Vue.component('varsity-sidebar', {
  props: ['uni'],
  template: `
    <div class="d-none d-md-block">
    <div class="py-2">
        <p class="text-muted">
            Contents
        </p>
    </div>
    <b-nav
        vertical
        nav-wrapper-class="w-50"
        v-b-scrollspy
        class="flex-column"
    >
        <b-nav-item
            href="#what"
            >What is {{ uni.name }}
        </b-nav-item>
        <b-nav-item
            href="#how"
            >Bio
        </b-nav-item>
        <b-nav-item
            href="#links"
            >Faculties
        </b-nav-item>
        <b-nav-item
            href="#links"
            >Programmes
        </b-nav-item>
        <b-nav-item
            href="#links"
            >How to apply
        </b-nav-item>
    </b-nav>
    </div>
  `,
});

Vue.component('courses-index', {
  props: ['courses'],
  template: `
    <div class="py-2">
    <b-card-group
        columns
    >
        <b-card
            v-for="course in courses" 
            :key="course.id"
            :title="course.name"
            class="shadow"
        >
            <b-card-text>
                <span class="badge badge-primary">
                    {{ course.code }}
                </span>
                <p class="text-muted pb-2">
                 duration: min 
                </p>
            </b-card-text>
            <router-link
                :to="{ name: 'course', params: { courseId: course.slug } }"
                variant="outline-primary"
            >
                Explore faculty
            </router-link>
        </b-card>
    </b-card-group>
    </div>
  `,
});
Vue.component('programmes-index', {
  props: ['programmes'],
  template: `
    <div class="py-5">
    <b-card-group columns>
        <b-card
            v-for="prog in programmes" 
            :key="prog.id"
            :title="prog.title"
            class="shadow"
        >
            <b-card-text>
                <span class="badge badge-primary">
                    {{ prog.qualification }}
                </span>
                <p class="text-muted pb-2">
                 duration: min 
                </p>
            </b-card-text>
            <router-link
                :to="{ name: 'faculty_programmes', params: { programmeId: prog.slug }}"
                variant="outline-primary"
            >
                Explore faculty
            </router-link>
        </b-card>
    </b-card-group>
    </div>
  `,
});

Vue.component('faculties', {
  props: ['faculties', 'uni'],
  template: `
    <div class="py-5">
    <b-card-group columns>
        <b-card
            v-for="faculty in faculties" 
            :key="faculty.id"
            :title="faculty.name"
            class="shadow"
        >
            <b-card-text>
                <p class="text-muted pb-2">
                </p>
            </b-card-text>
            <router-link
                :to="{ name: 'university_faculties', params: { facultyId: faculty.slug } }"
                variant="outline-primary"
            >
                Explore faculty
            </router-link>
        </b-card>
    </b-card-group>
    </div>
  `,
});
Vue.component('varsities', {
  data() {
    return {
      mainProps: {
        blank: true, blankColor: '#f2f4f8', width: 125, height: 125, class: 'm1',
      },
    };
  },
  props: ['unis'],
  template: `
    <div class="py-5 uni_group">
    <b-card-group columns>
        <b-card
            v-for="uni in unis" 
            :key="uni.id"
            :title="uni.name"
            v-bind="mainProps"
            :img-src="getImageUrl(uni.avatar_url)"
            class="shadow"
        >
            <b-card-text>
                <p class="text-muted pb-2">
                    {{ uni.city }}, {{ uni.state }}
                </p>
            </b-card-text>
            <router-link
                :to="{ name: 'university', params: { varsityId: uni.slug } }"
                variant="outline-primary"
            >
                Read more
            </router-link>
        </b-card>
    </b-card-group>
    </div>
  `,
  methods: {
    getImageUrl(imageId) {
      return `http://localhost:3000/${imageId}`;
    },
  },
});

Vue.component('careers-index', {
  data() {
    return {
      mainProps: {
        blank: true, blankColor: '#f2f4f8', width: 125, height: 125, class: 'm1',
      },
    };
  },
  props: ['careers'],
  template: `
    <div class="py-5 uni_group">
    <b-card-group columns>
        <b-card
            v-for="career in careers" 
            :key="career.id"
            :title="career.title"
            v-bind="mainProps"
            :img-src="getImageUrl(career.avatar_url)"
            class="shadow"
        >
            <b-card-text>
                <span
                    v-for="tag in career.tag_list"
                    class="badge badge-light mx-2 p-2"
                >
                    #{{ tag }}
                </span>
            </b-card-text>
            <router-link
                :to="{ name: 'career', params: { careerId: career.slug } }"
                variant="outline-primary"
            >
                Read more
            </router-link>
        </b-card>
    </b-card-group>
    </div>
  `,
  methods: {
    getImageUrl(imageId) {
      return `http://localhost:3000/${imageId}`;
    },
  },
});

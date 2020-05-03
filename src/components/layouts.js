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
                <b-nav-item href="/careers">
                    Mentorship
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
    <div class="py-2 mx-2 w-75">
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
        <div class="row">
            <div class="col-xs-12 col-md-9">
                <b-form-group>
                    <b-form-input
                        placeholder="4 tags max, comma separated"
                        size="lg"
                        name="career[tag_list]"
                        class="py-2"
                    >
                    </b-form-input>
                </b-form-group>
            </div>
            <div class="col-xs-12 col-md-3">
                <div class="image-upload">
                    <label for="file-input">
                        <b-icon-image
                            font-scale="2.5"
                            >
                        </b-icon-image>
                    </label>
                    <input
                        size="lg"
                        id="file-input"
                        name="career[avatar]"
                        class="py-2"
                        type="file"
                    />
                </div>
            </div>
        </div>
        <b-form-group>
            <b-form-textarea
                placeholder="(## Description, ## how to get started, ## salary, ## links)"
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
    <div class="py-2">
            <b-row>
                <div class="col-md-6 col-lg-5">
                    <div class="my-4 image-upload">
                        <label for="file-input">
                            <b-icon-image
                                font-scale="2.5"
                                >
                            </b-icon-image>
                        </label>
                        <input
                            size="lg"
                            id="file-input"
                            name="university[avatar]"
                            class="py-2"
                            type="file"
                        />
                    </div>
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
                            placeholder="street address"
                            name="university[address]"
                        >
                        </b-form-input>
                    </b-form-group>
                    <b-row>
                        <b-col>
                            <b-form-group>
                                <b-form-input
                                    size="lg"
                                    placeholder="City"
                                    name="university[city]"
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group>
                                <b-form-input
                                    size="lg"
                                    placeholder="Province"
                                    name="university[state]"
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group>
                                <b-form-input
                                    size="lg"
                                    placeholder="Country"
                                    name="university[country]"
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group>
                                <b-form-input
                                    size="lg"
                                    placeholder="Zipcode"
                                    name="university[zipcode]"
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <b-form-group>
                                <b-form-input
                                    type="number"
                                    size="lg"
                                    placeholder="Country Rank"
                                    name="university[local_rank]"
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group>
                                <b-form-input
                                    type="number"
                                    size="lg"
                                    placeholder="Global Rank"
                                    name="university[global_rank]"
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </div>
                <div class="col-md-6 col-lg-7">
                    <b-form-group>
                        <b-form-textarea
                            placeholder="(Enter brief bio)"
                            debounce="300"
                            size="lg"
                            rows="14"
                            name="career[description]"
                            class="py-2"
                        >
                        </b-form-textarea>
                    </b-form-group>
                </div>
            </b-row>
            <b-button
                variant="success"
                type="submit"
                size="lg"
            >
                Submit
            </b-button>
            <b-button
                variant="warning"
                href="/varsities"
                size="lg"
            >
                Cancel
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
    <b-list-group>
        <b-list-group-item
            v-for="course in courses" 
            :key="course.id"
            :title="course.name"
            class="my-2 shadow d-flex justify-content-between align-items-center"
        >
            <router-link
                :to="{ name: 'course', params: { courseId: course.slug } }"
            >
                {{ course.name }} - {{ course.code }}
            </router-link>
            <b-badge pill variant="info">
                 {{ course.nqf_credits }} credits
            </b-badge>
        </b-list-group-item>
    </b-list-group>
    </div>
  `,
});
Vue.component('course-form', {
  template: `
    <div class="py-2">
            <b-row>
                <div class="col-md-6 col-lg-5">
                    <b-form-group>
                        <b-form-input
                            required
                            size="lg"
                            placeholder="e.g. Introduction to accounting"
                            name="course[name]"
                        >
                        </b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input
                            size="lg"
                            required
                            placeholder="e.g. ACC1001F"
                            name="course[code]"
                        >
                        </b-form-input>
                    </b-form-group>
                    <b-row>
                        <b-col>
                            <b-form-group label="Credits">
                                <b-form-input
                                    size="lg"
                                    required
                                    placeholder="e.g. 8"
                                    name="course[nqf_credits]"
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group label="Year">
                                <b-form-input
                                    required
                                    size="lg"
                                    placeholder="e.g. First year"
                                    name="course[year]"
                                >
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <div class="py-4">
                        <span class="badge badge-light">
                            Hint
                        </span>
                        <p>
                            Add these headers to your course details:
                            <br/>
                            - Outline 
                            <br/>
                            - entry requirements
                            <br/>
                            - assessment
                            <br/>
                            - lecture times
                        </p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-7">
                    <b-form-group>
                        <b-form-textarea
                            required
                            placeholder="## Outline"
                            debounce="300"
                            size="lg"
                            rows="14"
                            name="course[content]"
                            class="py-2"
                        >
                        </b-form-textarea>
                    </b-form-group>
                </div>
            </b-row>
            <b-button
                variant="success"
                @click="$bvModal.hide('modal-add-course')"
                type="submit"
                size="lg"
            >
                Submit
            </b-button>
            <b-button
                variant="warning"
                @click="$bvModal.hide('modal-add-course')"
                size="lg"
            >
                Cancel
            </b-button>
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
                <p class="text-muted py-2">
                    duration: minimum of {{ prog.duration }}
                </p>
            </b-card-text>
            <router-link
                :to="{ name: 'faculty_programmes', params: { programmeId: prog.slug }}"
                variant="outline-primary"
            >
                Explore Programme
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
            class="shadow px-2"
        >
            <b-card-text>
                <span class="badge badge-secondary">
                    {{ faculty.level }}
                </span>
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
Vue.component('programme-form', {
  props: ['bannerRight'],
  template: `
    <div class="py-2">
        <b-row>
            <div class="col-md-6 col-lg-5">
                <b-form-group>
                    <b-form-input
                        size="lg"
                        placeholder="e.g. Astronomy"
                        name="programme[title]"
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group>
                    <b-form-input
                        size="lg"
                        placeholder="add tags"
                        name="programme[tag_list]"
                    >
                    </b-form-input>
                </b-form-group>
                <b-row>
                    <div class="col-md-4 col-lg-4">
                        <p class="lead">
                           Qualification
                        </p>
                    </div>
                    <div class="col-md-8 col-lg-8">
                        <b-form-group>
                            <b-form-select
                                size="lg"
                                :options="levels"
                                name="programme[qualification]"
                            >
                            </b-form-select>
                        </b-form-group>
                    </div>
                </b-row>
                <b-row>
                    <div class="col-md-4 col-lg-4">
                        <p class="lead">
                           Duration
                        </p>
                    </div>
                    <div class="col-md-8 col-lg-8">
                        <b-form-group>
                            <b-form-input
                                size="lg"
                                placeholder="e.g. 4 years"
                                name="programme[duration]"
                            >
                            </b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
            </div>
            <div class="col-md-2 col-lg-1">
            </div>
            <div class="col-md-4 col-lg-5">
                <b-img
                    :src="bannerRight"
                    alt="threaded-careers"
                    fluid
                    >
                </b-img>
            </div>
        </b-row>
        <b-button
            variant="success"
            @click="$bvModal.hide('modal-add-programme')"
            type="submit"
            size="lg"
        >
            Submit
        </b-button>
        <b-button
            variant="warning"
            @click="$bvModal.hide('modal-add-faculty')"
            size="lg"
        >
            Cancel
        </b-button>
    </div>
  `,
  data() {
    return {
      levels: ['undergraduate', 'postgraduate', 'honours'],
    };
  },
});
Vue.component('faculty-form', {
  props: ['bannerRight'],
  template: `
    <div class="py-2">
        <b-row>
            <div class="col-md-6 col-lg-5">
                <b-form-group>
                    <b-form-input
                        size="lg"
                        placeholder="name of Faculty"
                        name="faculty[name]"
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group>
                    <b-form-input
                        size="lg"
                        placeholder="Contact details"
                        name="faculty[telephones]"
                    >
                    </b-form-input>
                </b-form-group>
                <b-row>
                    <div class="col-md-4 col-lg-3">
                        <p class="lead">
                           Level
                        </p>
                    </div>
                    <div class="col-md-8 col-lg-9">
                        <b-form-group>
                            <b-form-select
                                size="lg"
                                :options="levels"
                                name="faculty[level]"
                            >
                            </b-form-select>
                        </b-form-group>
                    </div>
                </b-row>
                <b-row>
                    <div class="col-md-4 col-lg-3">
                        <p class="lead">
                           Website
                        </p>
                    </div>
                    <div class="col-md-8 col-lg-9">
                        <b-form-group>
                            <b-form-input
                                size="lg"
                                placeholder="Website"
                                name="faculty[url]"
                            >
                            </b-form-input>
                        </b-form-group>
                    </div>
                </b-row>
            </div>
            <div class="col-md-2 col-lg-1">
            </div>
            <div class="col-md-4 col-lg-5">
                <b-img
                    :src="bannerRight"
                    alt="threaded-careers"
                    fluid
                    >
                </b-img>
            </div>
        </b-row>
        <b-button
            variant="success"
            @click="$bvModal.hide('modal-add-faculty')"
            type="submit"
            size="lg"
        >
            Submit
        </b-button>
        <b-button
            variant="warning"
            @click="$bvModal.hide('modal-add-faculty')"
            size="lg"
        >
            Cancel
        </b-button>
    </div>
  `,
  data() {
    return {
      levels: ['undergraduate', 'postgraduate', 'honours'],
    };
  },
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
      return `https://api.threaded.co.za/${imageId}`;
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
      return `https://api.threaded.co.za/${imageId}`;
    },
  },
});

<template>
    <div class="py-4">
        <b-form inline>
            <b-input-group class="pb-4">
                <b-form-input size="lg"
                    aria-label="First name"
                    placeholder="Add city or address"
                    class="pt-5 pb-5 pr-5"
                ></b-form-input>
                <b-form-datepicker id="datepicker-lg"
                    size="lg"
                    local="en"
                    class="pr-5"
                ></b-form-datepicker>
                <b-form-timepicker id="timepicker-lg"
                                   size="lg"
                                   placeholder="Add times"
                                   local="en"
                                   class="pr-5"
                ></b-form-timepicker>
            </b-input-group>
            <b-btn size="lg"
                type="submit"
                class="ml-2"
                variant="primary"
            >Search</b-btn>
        </b-form>
        <div class="py-4">
            <div class="filter_tag">
                <button aria-invalid="false" class="tag_press" aria-pressed="pressed">
                    <span aria-label="Photographer">
                        <div class="inner_tag_press">
                            <span>
                                Hair Stylist
                            </span>
                        </div>
                    </span>
                </button>
            </div>
            <div class="filter_tag">
                <button aria-invalid="false" class="tag_press" aria-pressed="pressed">
                    <span aria-label="Photographer">
                        <div class="inner_tag_press">
                            <span>
                                Photographer
                            </span>
                        </div>
                    </span>
                </button>
            </div>
            <div class="filter_tag">
                <button aria-invalid="false" class="tag_press" aria-pressed="pressed">
                    <span aria-label="Photographer">
                        <div class="inner_tag_press">
                            <span>
                                Chefs
                            </span>
                        </div>
                    </span>
                </button>
            </div>
            <div class="filter_tag">
                <button aria-invalid="false" class="tag_press" aria-pressed="pressed">
                    <span aria-label="Photographer">
                        <div class="inner_tag_press">
                            <span>
                                Makeup artist
                            </span>
                        </div>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Search',
};
</script>

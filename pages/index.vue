<template>
  <div>
    <h1 class="mb-4 text-center">{{ title }}</h1>

    <div class="card-deck mb-4">
      <div class="card stylish-card">
        <div class="card-body">
          <h2 class="card-title">
            <nuxt-link to="/about">{{ title2 }}</nuxt-link>
          </h2>
          <img
            :src="image1"
            alt="Taj Mahal"
            class="img-fluid rounded"
          />
        </div>
      </div>

      <div class="card stylish-card">
        <div class="card-body">
          <h2 class="card-title">
            <nuxt-link to="/a">{{ title3 }}</nuxt-link>
          </h2>
          <img
            :src="image2"
            alt="Statue of Liberty"
            class="img-fluid rounded"
          />
        </div>
      </div>
    </div>

    <div class="text-center">
      <nuxt-link to="/recipe" class="btn btn-primary stylish-button">{{ buttonLabel }}</nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { useRankingData } from

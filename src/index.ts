import type {
	ClubsFunctionGetApiPaths,
	ClubsFunctionGetSlots,
	ClubsFunctionPlugin,
	ClubsPluginMeta,
} from '@devprotocol/clubs-core'
import { ClubsPluginCategory } from '@devprotocol/clubs-core'
import { SlotName } from '@devprotocol/clubs-plugin-posts'
import { meetingHandler } from './ApiHandler'
import Readme from './readme.astro'
import Button from './components/Button.astro'
import AfterContentForm from './components/edit-after-content-form.astro'
import AfterPostContent from './components/feed-after-post-content.astro'

export const getSlots = (async () => {
	return [
		{
			slot: SlotName.PostsEditToolbarButton,
			component: Button,
		},
		{
			slot: SlotName.PostsEditAfterContentForm,
			component: AfterContentForm,
		},
		{
			slot: SlotName.PostsFeedAfterPostContent,
			component: AfterPostContent,
		},
	]
}) satisfies ClubsFunctionGetSlots

export const meta: ClubsPluginMeta = {
	id: 'devprotocol:clubs:huddle:plugin',
	displayName: 'Huddle01',
	category: ClubsPluginCategory.Uncategorized,
	description: '',
	readme: Readme,
} satisfies ClubsPluginMeta

export const getApiPaths = (async () => {
	return [
		{
			paths: ['schedule'],
			// This will be [POST] /api/devprotocol:clubs:plugin:posts:message
			method: 'POST',
			handler: meetingHandler,
		},
	]
}) satisfies ClubsFunctionGetApiPaths

export default {
	getSlots,
	meta,
	getApiPaths,
} satisfies ClubsFunctionPlugin

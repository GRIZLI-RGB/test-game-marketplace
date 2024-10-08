export default function SeoText() {
	return (
		<div className="text-secondaryText text-[14px] leading-[20px] [&>h6]:font-medium [&>h6]:leading-[24px] [&>h6]:text-[16px]">
			<p>
				Робуксы — это валюта платформы мини игр Roblox, обеспечивающая
				комфортный геймплей и расширенные возможности для игрока. Что
				естественно притягивает толпы желающих их приобрести. Сделать
				это безопасно и без переплат лучше всего на проверенной
				площадке, которой и является биржа игровых ценностей FunPay. Мы
				обеспечиваем комфортные условия для торговли робуксами Roblox
				без посредников, поэтому на нашей торговой площадке всегда
				присутствует:
			</p>
			<ul>
				{[
					"Безопасность сделок. Они проходят в три этапа: оплата, получение игровой валюты, подтверждение выполнения заказа.",
					"Реальный рыночный курс робуксов. Формируется в условиях естественной конкуренции между продавцами.",
					"Быстрое оформление заказов. Всего за несколько кликов, с оплатой любым удобным для вас способом.",
				].map((text) => (
					<li key={text} className="flex items-center">
						<span className="mx-[9px] bg-secondaryText rounded-full w-1 h-1 inline-block" />
						<span>{text}</span>
					</li>
				))}
			</ul>
			<p>
				Если же у вас возникнут вопросы, то служба поддержки FunPay
				ответит на них в любое время суток!
			</p>
			<br />
			<h6>Как купить</h6>
			<p>
				Покупка робуксов осуществляется просто, как мы писали выше,
				нужно сделать всего три действия:
			</p>
			<ol>
				{[
					"Выбрать предложение, кликнув на него, и находясь на странице оформления заказа, связаться с продавцом.",
					"Оплатить заказ на нужное количество робуксов.",
					"Получить игровую валюту RBX и подтвердить выполнение заказа. После можно оставить отзыв продавцу и оценить его работу.",
				].map((text, index) => (
					<li key={text} className="pl-1.5">
						{index + 1}. {text}
					</li>
				))}
			</ol>
			<p>
				Продавец получит ваши деньги только после того, как вы получите
				робуксы в Roblox и отправите системе подтверждение о выполнении
				заказа.
			</p>
			<br />
			<h6>Продавцам</h6>
			<p>
				Если вы опытный продавец или начинаете свой путь с нуля —
				неважно, у вас есть замечательная возможность продать робуксы
				через FunPay. Чтобы стать продавцом нашей биржи, следуйте
				следующим принципам:
			</p>
			<ul>
				{[
					"Выставляйте на продажу только ту сумму, что есть у вас в наличии, чтобы вы смогли быстро передать игровую валюту клиенту.",
					"Вежливо отвечайте на вопросы потенциальных покупателей.",
					"Ответственно относитесь к своим обязанностям и выполняйте заказы в кратчайшие сроки.",
					"Покупатель должен получить столько робуксов, сколько он указал в заказе.",
				].map((text) => (
					<li key={text} className="flex items-center">
						<span className="mx-[9px] bg-secondaryText rounded-full w-1 h-1 inline-block" />
						<span>{text}</span>
					</li>
				))}
			</ul>
			<p>
				И помните, чем больше у вас довольных клиентов, тем выше шанс
				превратить своё хобби в отличный источник дохода.
				Присоединяйтесь к FunPay!
			</p>
		</div>
	);
}
